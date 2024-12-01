/* 
what does webserver do in internet ?

1.https://www.example.com/index.html 
2.domain name is www.example.com ==> gives address of webserver
3./index.html                    ==>specific resouce to be requested
4.browsers communicates with DNS server to get ip address
5.browser establishes connection with server ip address with help of tcp/ip protocal
6.browser sends an http request to server along with data, method,path,headers
7.webserver processs the request .and searches for /index.html in root directory
  server reads its content and sends back as a response in this case html file.
  if file doesnot found error
8.now browser will render html page and a reference to css file and js file then 
further requests are made which again go through dns,tcp connection is sent to
 server for those resources.


 script tag tell the browser to load the script.js file .it sends a get request 
 along with path 

*/