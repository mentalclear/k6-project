import http from 'k6/http';
import { sleep } from 'k6';

export default function() {
    http.get('https://test.k6.io');
    //http.get('https://kilishek.com');
    sleep(1);
}