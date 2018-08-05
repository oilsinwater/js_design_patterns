/**This is a structural design pattern that behaves exactly as its name suggests.
 * It acts as a surrogate or placeholder for another object to control access to it.
    It is usually used in situations where a target object is under constraints and may
    not be able to handle all its responsibility efficiently. A proxy, in this case, usually 
    provides the same interface to the client and adds a level of indirection to support
    controlled access to the target object to avoid undue pressure on it.

    The proxy pattern can be very useful when working with network request heavy applications
    to avoid unnecessary or redundant network requests.

    In this example, we create a Target class Image that has a mock network request that 
    should be avoided and a Proxy class ProxyImage that intercepts requests to the Target
    class object and serves image from cache if it can.If it cannot serve from cache it
    utilizes the Target class network request method loadImage to fetch the image and also
    store it in cache for future.
 */

 const IMAGE_CACHE = [];

 const addToImageCache = url => IMAGE_CACHE.push(url);

 // Target class
 class Image {
     constructor(url) {
         this._url = url;
     }

     loadImage() {
         // assume this is a network request and should be avoid
         return ` ${this._url} from network `;
     }
 }
 
 // Proxy Class
 class ProxyImage {
     constructor(url) {
         this._url = url;
     }

     loadImage() {
         const url = this._url;
         const cachedImage = IMAGE_CACHE.find( image => url === image );
         if (cachedImage) {
             return ` ${cachedImage} from cache `;
         } else {
             addToImageCache(url);
             return new Image(url).loadImage();
         }
     }
 }

 // usage
 const real = new ProxyImage('testImage.jpeg');
 console.log(real.loadImage()); // 'testImage.jpeg from network'

 const cached = new ProxyImage('testImage.jpeg');
 console.log(cached.loadImage()); // 'testImage.jpeg from cache'

 