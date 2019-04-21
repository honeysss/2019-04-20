
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
    <title>文章管理系统</title>
</head>
<body>
<?php
require_once("connect.php");
$keywords = $_POST['keywords'];
$sql = "select * from article_info where title like '$keywords%' order by title asc";
$query = mysqli_query($con,$sql);
if($query && mysqli_num_rows($query)){
    while($result = mysqli_fetch_assoc($query)){
        $data[]=$result;
    }
}else{
    echo "<div class=\"alert alert-warning alert-dismissable\">
	    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">
		    &times;
	    </button>
	    没有找到包含该关键字的文章，请重新搜索
    </div>";
}
?>
<!--    顶部内容-->
<div class="top-content">
    <h1 class="top-h1">文章管理系统</h1>
    <div class="public-article">
        <a href="article-public.php" title="发布文章"  class="public">发布文章</a>
    </div>
</div>

<!--    中间内容-->
<div class="middle-content">
    <!--        文章信息-->
    <div class="middle-left-content">
        <!--        搜索框-->
        <div class="middle-right-content">
            <div class="search-content">
                <form method="post" action="article-search.php">
                    <div class="col-lg-12">
                        <div class="input-group">
                            <input type="text" placeholder="请在这里输入..." class="search form-control" name="keywords">
                            <span class="input-group-btn">
                                <button type="submit button" class="btn btn-default">
                                    <span class="glyphicon glyphicon-search"></span> Search
                                </button>
                        </div>
                        </span>
                    </div>
                </form>
            </div>
            <hr class="cut0">
        </div>
        <?php
        if(!empty($data)) {
            foreach ($data as $value) {
                ?>
                <div class="article-list">
                    <h1 class="article-title"><?php echo $value['title'];?></h1>
                    <hr class="cut1">
                    <p class="article-author">&nbsp;&nbsp;&nbsp;&nbsp;作者：<?php echo $value['author'];?></p>
                    <p class="article-content"><?php echo $value['content'];?></p>
                    <div class="article-foot">
                        <a href="article-show.php?id=<?php echo $value['id'];?>" title="详情" class="detail"><h4>详情=>></h4></a>
                        <a href="article-modify.php?id=<?php echo $value['id'];?>" title="修改" class="modify"><h4>修改</h4></a>
                        <a href="article-delete.php?id=<?php echo $value['id'];?>" title="删除" class="delete"><h4>删除</h4></a>
                    </div>
                    <hr class="cut2">
                </div>
                <?php
            }
        }
        ?>
    </div>
</div>
</body>
</html>