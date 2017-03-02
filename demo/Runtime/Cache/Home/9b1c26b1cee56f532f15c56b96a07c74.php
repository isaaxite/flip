<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head>
	<title>Flip</title>
	<link rel="stylesheet" type="text/css" href="/Public/flip.css">

	<script type="text/javascript" src="/Public/jquery.js"></script>
	<script type="text/javascript" src="/Public/flip.jquery.js"></script>
</head>
<body>
	<div class="flip">
		<div id="pageNumber" data-total="20" data-current="<?php echo ((isset($_GET['p']) && ($_GET['p'] !== ""))?($_GET['p']):1); ?>" class="page-ctt">
		<!-- 页码 -->
		</div>
	</div>
<script type="text/javascript">
	var $page = $("#pageNumber");
	$page.flip({
		cur_page: $page.attr('data-current'),
		total_page: $page.attr('data-total'),
		url: location.origin+'?p=#page#'
	});
	console.log(location);
</script>
</body>
</html>