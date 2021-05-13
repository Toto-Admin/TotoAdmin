<?php
$ch = curl_init();
// curl_setopt($ch,CURLOPT_URL,"https://totoapp.ladesk.com/api/knowledgebase/entries?&apikey=8774gxnfw4bk9lqpc6du9v0laz6xe5t9");
curl_setopt($ch,CURLOPT_URL,'https://totoapp.ladesk.com/api/v3/tickets');
$headr = array();
$headr[] = 'Content-type: application/json';
$headr[] = 'apikey: rrk9g42k0lc03io20h8512iswqn22c7j';

curl_setopt($ch, CURLOPT_HTTPHEADER,$headr);
curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
$curl_response=curl_exec($ch);
if ($curl_response === false) {
    $info = curl_error($ch);
    curl_close($ch);
    die("error occurred during curl exec. Additional info: " . var_export($info, true));
}
curl_close($ch);
/* process $curl_response here */
print_r(json_decode($curl_response));
?>