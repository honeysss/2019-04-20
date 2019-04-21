<?php 

	$date1 = date_create('2018-12-08 14:22:00');
	$date2 = date_create('2018-12-08 14:20:00');
	$date11 = date_format($date1, "Y-m-d H:i:s");
	$date22 = date_format($date2, "Y-m-d H:i:s");

	$diff = $date11 - $date22;
	echo (strtotime($date11) - strtotime($date22))/60;
 ?>