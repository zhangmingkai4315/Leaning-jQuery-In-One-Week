<?php
/**
 * Created by PhpStorm.
 * User: zhangmingkai
 * Date: 15/4/2
 * Time: 上午9:21
 */

if(isset($_REQUEST['term']))
{
    echo $_REQUEST['term'];
}else{
    echo "No result!";
}