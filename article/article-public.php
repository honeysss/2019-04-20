

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
    <title>发布文章</title>
</head>
<body>
<!--    顶部内容-->
<div class="top-content">
    <h1 class="top-h1">发布文章</h1>
</div>

<div class="modify-article-content">
    <form method="post" action="article-public-handle.php" class="form-horizontal" role="form">
        <div class="modify1 form-group">
            <label class="modify-h2 col-sm-2 control-label"  placeholder="请输入文章名称..." >文章名称：</label>
            <div class="col-sm-5">
                <input type="text" class="modify-title form-control" name="title">
            </div>
        </div>
        <div class="modify2 form-group">
            <label class="modify-h2 col-sm-2 control-label" placeholder="请输入文章作者..." >文章作者：</label><div class="col-sm-5">
                <input type="text" class="modify-title form-control" name="author">
            </div>
        </div>
        <div class="modify3 form-group">
            <label class="modify-h2 col-sm-2 control-label"  placeholder="请输入文章内容">文章内容：</label>
            <div class="col-sm-7">
                <textarea class="form-control" name="content" rows="15"></textarea>
            </div>
        </div>
        <button type="submit" class="btn btn-default change-over">提交</button>
    </form>
    <div class="foot"></div>
</div>
</body>
</html>