<?php
/**
 * 行驶证识别
 */
class OcrControl extends CControl{
	/**
	 * 构造函数
	 */
	public function __construct(){
		parent::__construct();
	}
	public $ocrurl = 'https://dm-53.data.aliyun.com/rest/160601/ocr/ocr_vehicle.json';
	public $ocrappcode  = '2855b1ad4f734905a41f3459205be2dd';


	//识别
	public function actxsz(){
		if (empty($_POST['image'])) {
			echo error_info(1,'参数错误');die;
		}
		if (empty($_POST['type'])) {
			echo error_info(2,'参数错误');die;
		}
		$aaa = explode(',', $_POST['image']);
        echo $this->ocr($_POST['type'],$aaa[1],'',false);
		
	}
	//行驶证识别
    public function ocr($side,$base64='',$imgpath='',$type=false){
    	$url = $this->ocrurl;
	    $appcode =  $this->ocrappcode;
	    
	    //如果输入代有inputs, 设置为True，否则设为False
	    $is_old_format = false;
	    //如果没有configure字段，config设为空
	    $config = array(
	        "side" => $side
	    );
	    //$config = array()
	    if ($type) {
	    	$file = $imgpath; 
	    	if($fp = fopen($file, "rb", 0)) { 
		        $binary = fread($fp, filesize($file)); // 文件读取
		        fclose($fp); 
		        $base64 = base64_encode($binary); // 转码
	    	}
	    }
	    // echo $base64;die;
	    // $base64 = base64_encode($base64);
	    $headers = array();
	    array_push($headers, "Authorization:APPCODE " . $appcode);
	    //根据API的要求，定义相对应的Content-Type
	    array_push($headers, "Content-Type".":"."application/json; charset=UTF-8");
	    $querys = "";
	    if($is_old_format == TRUE){
	        $request = array();
	        $request["image"] = array(
	                "dataType" => 50,
	                "dataValue" => "$base64"
	        );

	        if(count($config) > 0){
	            $request["configure"] = array(
	                    "dataType" => 50,
	                    "dataValue" => json_encode($config) 
	                );
	        }
	        $body = json_encode(array("inputs" => array($request)));
	    }else{
	        $request = array(
	            "image" => "$base64"
	        );
	        if(count($config) > 0){
	            $request["configure"] = json_encode($config);
	        }
	        $body = json_encode($request);
	    }
	    $method = "POST";
	    $curl = curl_init();
	    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, $method);
	    curl_setopt($curl, CURLOPT_URL, $url);
	    curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
	    curl_setopt($curl, CURLOPT_FAILONERROR, false);
	    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
	    curl_setopt($curl, CURLOPT_HEADER, true);
	    if (1 == strpos("$".$url, "https://"))
	    {
	        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
	        curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
	    }
	    curl_setopt($curl, CURLOPT_POSTFIELDS, $body);
	    $result = curl_exec($curl);
	    $header_size = curl_getinfo($curl, CURLINFO_HEADER_SIZE); 
	    $rheader = substr($result, 0, $header_size); 
	    $rbody = substr($result, $header_size);
	    logFile('./module/ocr/postdata/'.date('Y-m-d').'.log','响应数据:'.$rbody);
	    $httpCode = curl_getinfo($curl,CURLINFO_HTTP_CODE);
	    if($httpCode == 200){
	        if($is_old_format){
	            $output = json_decode($rbody, true);
	            $result_str = $output["outputs"][0]["outputValue"]["dataValue"];
	        }else{
	            $result_str = $rbody;
	        }
	        return error_info(100,json_decode($result_str,true));
	    }else{
	    	return error_info(9,'图片解析错误');
	        printf("Http error code: %d\n", $httpCode);
	        printf("Error msg in body: %s\n", $rbody);
	        printf("header: %s\n", $rheader);
	    }
    }
}
?>