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
## Cấu trúc thư mục dự ns
![structure](/img/structure.png)
- **app**: thư mục front-end
