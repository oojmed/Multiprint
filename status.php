<?php

http_response_code($_GET['s']);
header('Content-Type: application/javascript');

echo 'write("status", "' . $_GET['s'] . '"); window.status_' . strval($_GET['s']) . ' = true;';