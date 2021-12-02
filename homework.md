// EX1 Build project trên Web Mobile, Web Desktop, Android trong thư mục ./Build_Web_Desktop_Android_AddLodash/build

Web Mobile : Done.

Web Desktop : Done. https://kakalak11.github.io/Delploy_WebTest/

Android : Error compile!!!

// Ex2 : cài đặt Module Lodash trong thư mục ./Build_Web_Desktop_Android_AddLodash/packages : Done.

// Ex3 Tìm hiểu các thông số trên Helo project:

Frametime: Thời gian cần để render một frame trên màn hình. Trong project example Hello World của cocos thì frametime là 4ms, có nghĩa là hệ thống render một frame trong 4ms. Nếu frametime càng cao thì fps càng giảm và ngược lại. Nếu frametime không ổn định sẽ sinh ra hiện tượng giật (stutter), khiến cho trải nghiệm game không hoàn hảo, mượt mà.

Framerate: Tổng số khung hình render trong một giây của hệ thống, tiêu chuẩn chung của framerate thường là 60fps thì màn hình phổ thông thường có tần số quét là 60hz.

=> Trong một giây, hệ thống không nhất thiết phải render 60 frames trong một giây, nó có thể render 10 frames trong 0,2 giây và không render gì trong 0,8 giây còn lại cho 50 frames tiếp theo.

Draw call: Về cơ bản, draw call là những lẩn gọi thông tin về các thành phần đồ hoạ được chuẩn bị trước bởi CPU và cuối cùng được GPU thực thi để render đồ hoạ trên màn hình. Theo thứ tự, thì frame #1 sẽ được CPU chuẩn bị trước và khi GPU thực thi frame #1 thì CPU chuẩn bị trước frame #2. Trong trường hợp CPU không kịp xử lý thông tin để gửi cho GPU, GPU sẽ không tận dụng được hết 100% công suất của nó và khiến FPS bị tụt giảm nghiêm trọng, tạo ra một bottleneck ở CPU.

Game Logic: Game logic về cơ bản cũng như draw call, nhưng khác ở chỗ là nó thay đổi những thuộc tính vô hình, trạng thái của game. 

Renderer: Thời gian cần để render một hình ảnh mới trên màn hình, renderer giống với frametime. Nhưng khác ở chỗ, nếu có những vật thể động như particle thì renderer vẫn không đổi nhưng frametime lại tăng lên. Như vậy, có thể nói, renderer là thời gian để render ra một vật thể mới, còn frametime là thời gian để render một frame mới.


WebGL: WebGL (Web Graphic Library) là một API đồ họa low-level được sử dụng để render h

ình ảnh 2D hoặc 3D trên trình duyệt web dựa trên OpenGL mà không cần sử dụng plug-in
