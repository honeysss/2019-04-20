<?php
session_start();
$foodName = $_GET['foodName'];
$_SESSION['commentFoodName'] = $foodName;
    if(!empty($_SESSION['commentFoodName'])){
        $j = 0;
        for($i = 0;$i<sizeof($_SESSION['commentFoodName']);$i++){

            ?>


            <li>
                <p class="up-foodName"><?php echo $_SESSION['commentFoodName'][$i];?></p>
                <span class="down"><img src="img/差评之前.png" onclick="down(<?php echo $j;?>)" class="down-head" title="较差" /></span>
                <span class="up"><img src="img/点赞之前.png"  onclick="up(<?php echo $j;?>)" class="up-head" title="不错"/> </span>
            </li>

            <?php
            $j++;
        }
    }
?>