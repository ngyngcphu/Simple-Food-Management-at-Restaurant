# Simple-Food-Management-at-Restaurant
> Phần mềm quản lý các món ăn tại một nhà hàng (very simple).
## Đối tượng sử dụng
- Chỉ dùng cho người quản lý (1 account nên không cần đăng nhập).
## Yêu cầu kĩ thuật
- Chỉ cần hiện thực UI theo chức năng và các logic xử lý ở phía front-end.
- Không cần hiện thực back-end.
- Dùng mock data tự tạo được lưu trong 1 file json.
## Yêu cầu chức năng
### 1. Các chức năng chính
- Xem các món ăn tại cửa hàng (chia theo combo, đồ ăn, thức uống, khai vị, tráng miệng)
![view](/img/view.png)
- Tạo được món ăn mới
![add](/img/add.png)
- Chỉnh sửa món ăn
- Xóa món ăn
### 2. Các chức năng phụ
- Tìm kiếm món ăn.
- Filter món ăn.
![filter](/img/filter.png)
## Class diagram
- Chỉ 1 class diagram.
## Công nghệ sử dụng
- Ngôn ngữ: HTML/CSS/Javascript.
- ReactJS (một thư viện javascript dùng cho frontend). Document của ReactJS tại đây https://vi.reactjs.org/docs/add-react-to-a-website.html (lưu ý nên đọc phiên bản cũ này - có hỗ trợ tiếng Việt).
- Bootstrap (một framework CSS)
## Hướng dẫn setup môi trường code
- VSCode
- nodejs (nếu chưa cài đặt thì tải về tại https://nodejs.org/en/download)
- Sau khi cài xong chạy các câu lệnh dưới đây (output như hình dưới -> oke).
![node-npm](/img/node-npm.png)
- Tải git và tạo tài khoản github (nếu chưa có)
## Hướng dẫn chạy code
- Clone project trên bằng cách chạy lệnh ```git clone https://github.com/ngyngcphu/Simple-Food-Management-at-Restaurant.git```
- Tiếp theo ```cd app```
- Chạy lệnh ```npm install``` (sau đó node_modules sẽ tự cài trong app)
- Chạy lệnh ```npm start``` để chạy ứng dụng (gõ **localhost:3000** trên trình duyệt để thấy kết quả)
## Cấu trúc thư mục app (front-end)
![structure](/img/structure.png)
- node_modules: folder này là môi trường để chạy ReactJS (chỉ xuất hiện khi clone project và chạy lệnh ```npm install```).
- public: folder chứa template HTML (không sửa đổi folder này trong suốt quá trình code).
- src: chỉ cần quan tâm các file/folder sau: folder **components** (chứa các file jsx), file **App.js** tổng hợp các file trong **components**, file **index.js** dùng để render ra file **App.js** ra màn hình).
- .gitignore: chỉ định file/folder nào không được push lên github (node_modules)
- package.json, package-lock.json: chứa các thông tin dự án bao gồm các thư viện và các đoạn scripts để chạy code.
## Các nguyên tắc khi làm việc nhóm trên github
- Luôn luôn ```git pull``` mỗi khi bắt đầu code (tránh các conflict phiền phức).
- Không được push trực tiếp lên nhánh **main** (sẽ bị chặn khi ```git push -u origin main```)
- Thay vào đó tạo ra branch riêng bằng lệnh ```git checkout -b <name_branch>``` (Ví dụ ```git checkout -b feat/foodlist```)
- Sau đó push lên github và tạo một Pull requests. Leader sẽ check và review code trước khi merge vào nhánh main.
