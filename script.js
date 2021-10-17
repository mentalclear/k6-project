import http from 'k6/http';
import { sleep } from 'k6';

// Using optins to avoid command line parametrization
export let options = {
    vus: 10,
    duration: '30s',
};

export default function() {
    //http.get('https://test.k6.io');
    http.get('https://kilishek.com');
    sleep(1);
}