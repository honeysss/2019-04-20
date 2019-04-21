
<?php
require_once("connect.php");
$id = $_GET['id'];
$sql = "select * from article_info where id=$id";
$query = mysqli_query($con,$sql);
if($query &&  mysqli_num_rows($query)){
    $result = mysqli_fetch_assoc($query);
}else{
    echo "<script>alert('该文章不存在！');window.location.href='mainPage.php';</script>";
}

?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://cdn.bootcss.com/jquery/2.1.1/jquery.min.js"></script>
    <script src="https://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <title>文章详情</title>
</head>
<body>
<!--    顶部内容-->
<div class="top-content">
    <h1 class="top-h1">文章详情</h1>
</div>

<!--    中间内容-->
<div class="show-middle-content">
    <!--        文章信息-->
    <div class="article-list">
        <h1 class="article-show-title"><?php echo $result['title'];?></h1>
        <p class="article-show-author">作者：<?php echo $result['author'];?></p>
        <p class="article-show-content"><?php echo $result['content'];?></p>
    </div>
</div>
</body>
</html>