<template>
  <div class="ct">
    <p>
      <img src="http://p1.pstatp.com/large/pgc-image/f2bd9df37d944ee792d175efc55c9122" alt>
    </p>随着系统以及应用复杂性的日益增高，「write once，run anywhere」开始成为越来越多开发工具的终极目标。
    基于此，Google 于 2017 年的 I/O 大会上隆重推出了移动 UI 框架 Flutter，可以让开发者在 iOS 和 Android 系统上快速构建高质量的原生用户界面。与此同时，苹果也于今年 WWDC 为开发者们带来了一套可横跨苹果几大操作系统的 UI 框架 SwiftUI。
    那么在此趋势下，类似 Flutter 的这种工具真的是新一代移动开发的未来吗？
    Flutter 是移动应用程序开发的未来？
    作者 | Eric Grandt
    译者 | 王艳妮，责编 | 屠敏
    出品 | CSDN（ID：CSDNnews）
    几年前，我在Android和iOS开发中略有涉足，使用的是Java和Objective-C。在花了大约一个月的时间学习后，我决定不再深入学习了。我就是无法找到那种深入其中的状态。
    但最近，我了解了Flutter，并决定在移动应用程序开发方向上再试上一试。我当即就爱上了它，因为它使开发多平台应用程序变得贼有趣。自从了解它以来，我已经使用它创建了一个app和一个库。 Flutter似乎是一个非常有前景的一步，下面我想解释一下我之所以相信这一点的几方面的原因。
    由Dart提供技术支持
    Flutter使用的是由谷歌开发的Dart语言。如果你之前使用过Java，那么会比较熟悉Dart的语法，因为它们非常相似。但除了语法之外，Dart跟Java就很不同了。
    我不打算深入讨论Dart，以免跑题，但我想讨论一下我认为它最有用的功能。这个功能就是异步操作。 Dart不仅支持异步操作，而且还使其变得非常容易。
    如果你正在进行IO或其他耗时的操作（例如查询数据库），那么你有可能在所有Flutter应用程序中使用异步操作。如果没有异步操作，任何耗时的操作都会导致程序冻结直到此操作完成。为了防止这种情况，Dart为我们提供了async和await关键字，以允许我们的程序在等待这些较长操作完成的过程中继续往下执行。
    让我们看看几个例子：一个有异步操作，一个没有。
    并分别查看输出：
    这不太理想。没人会想用在执行长时间操作时会卡住的App。所以让我们稍微修改一下并使用async和await关键字。
    并再次输出：
    有了异步操作，我们在执行需要比较久才能完成的代码的同时，其余代码的执行也不会被妨碍。
    只写一次代码，就能同时在Android和iOS上运行
    考虑到需要为Android和iOS使用不同的代码库，开发移动应用程序可能需要花费大量时间。除非您使用像Flutter这样的SDK，这样您就将拥有一个能适配两个操作系统的代码库。不仅如此，你还可以完全原生地运行它们。这意味着诸如浏览页面和导航之类的东西，完美配合不同的操作系统。
    一言以蔽之，只要您有个设备或模拟器在运行着，Flutter就可以使构建和运行您的应用程序来进行测试的过程简单到动动手指就能完成。
    <p>
      <img src="http://p3.pstatp.com/large/pgc-image/c40ec581a8e14f15a1a28ec450a93aeb" alt>
    </p>UI开发
    UI开发几乎是我最不期待的事情之一。我更像是一个后端开发人员，所以当涉及到严重依赖它的东西时，我只想要一些简单的东西。这就是Flutter在我眼中闪耀的地方。
    UI通过将不同的小部件组合在一起并修改它们以适合你的App外观来创建。你几乎可以完全控制这些小部件的显示方式，因此你最终总是会得偿所愿。为了布局UI，可以使用诸如Row，Column和Container之类的小部件。对于内容，有诸如Text和RaisedButton之类。这只是Flutter提供的小部件中的几个，除这些之外还有很多。使用这些小部件，我们可以构建一个非常简单的UI：
    Flutter 是移动应用程序开发的未来？
    Flutter像一个拥有各种各样道具的魔术师，使你能轻而易举地构建App的主题。你可以通过手动更改字体，颜色，并逐个设置所有内容，但这需要太长时间了。 相反，Flutter为我们提供了一个名为ThemeData的东西，它允许我们为颜色，字体，输入字段等等设值。 此功能在保持应用外观的一致性方面很出色。
    使用此ThemeData，我们设置应用程序颜色，字体系列和一些文本样式。 除文本样式之外的所有内容都将自动应用于整个app范围。 每个小部件的文本样式必须手动地一个一个设置，但这仍然很简单：
    Flutter 是移动应用程序开发的未来？
    为了进一步提高效率，Flutter可以热重新加载应用程序，因此您无需在每次更改UI时重新打开它。您现在可以进行更改，保存，然后在大概一秒内就能看到更改后的效果。
    库
    Flutter提供了许多开箱即用的强大功能，但有时你需要更多功能。考虑到Dart和Flutter的大量可用的库，这根本不是问题。是否有兴趣在你的应用中投放广告？有这方面的库。想要新的小部件吗？有这方面的库。
    如果你更喜欢自己动手DIY，可以创建自己的库并马上就能与社区其他人分享。向项目添加库很简单，可以通过向pubspec.yaml文件添加一行代码来完成。例如，如果要添加sqflite库：
    将它添加到文件后，运行flutter packages get，这样就好了。各种各样的库使开发Flutter应用程序变得轻而易举，并为开发过程节省了大量时间。
    后端开发
    现在大多数App都依赖于某种数据，所有这些数据需要存储在某个地方，以便以后可以显示和使用。因此，在寻找使用新SDK（例如Flutter）创建应用时，牢记这一点非常重要。
    再重复一次，Flutter App是使用Dart制作的，而Dart在后端开发方面非常出色。我在本文中谈到了很多简单易行的功能，Dart和Flutter的后端开发也不例外。不管是对于初学者还是专家，创建数据驱动的App都非常简单，但这种简单性并不等同于质量底下。
    可以使用库，以便你使用所选择的数据库。使用sqflite库，我们可以非常快速地启动并运行SQLite数据库。感谢单件模式，我们可以访问数据库并从几乎任何地方都可以进行查询，而无需每次都重新创建一个对象。
    从数据库中检索数据后，可以使用一个模型将其转换为对象。或者，如果要将对象存储在数据库中，可以使用相同的模型将其转换为JSON。
    如果没有将其显示给用户的方法，这些数据就不是那么有用了。这就是Flutter带着诸如FutureBuilder或StreamBuilder这样的小部件登场的时候了。如果您对使用Flutter，SQLite和其他技术来创建数据驱动型App有兴趣做更深一步的了解，我建议你查看我写的这方面的文章：
    《在Flutter中使用Streams，BLoCs和SQLite》：Streams，BLoCs和SQLite在处理Flutter中的数据时是一个很好的组合（https://medium.com/@erigitic/using-streams-blocs-and-sqlite-in-flutter-2e59e1f7cdce）。
    <p>
      <img src="http://p3.pstatp.com/large/pgc-image/f1a759e3ac4a4820a5ca61e660a1fce0" alt>
    </p>最后的一些思考
    有了Flutter，就有了几乎无穷无尽的可能性，因此即使是体量巨大的App也可以轻松地被创建出来。如果你是做移动App开发的并且尚未尝试过Flutter，我强烈建议你试一下，因为我相信你也会爱上它的。使用Flutter几个月之后，我认为可以说这是移动开发的未来。如果不能算未来的话，这也绝对是朝着正确方向迈出去的一步。
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.ct {
  text-indent: 2em;
  margin: 10px;
}
img {
  width: 100%;
  height: 100%;
}
</style>