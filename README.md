# Simple-Food-Management-at-Restaurant
> Phần mềm quản lý các món ăn tại một nhà hàng.
## Table of contents
[I. Giới thiệu hệ thống](#introduce)

[II. Các tính năng của hệ thống](#feature)

[III. Class Diagram](#classDiagram)

[IV. Phân chia công việc](#workLog)

[V. Cấu trúc thư mục](#structure)

[VI. Hướng dẫn chạy dự án ở môi trường dev](#run)

[VII. Video demo](#demo)

*********************************
<a name = "introduce"></a>

## I. Giới thiệu hệ thống
- Phần mềm đơn giản quản lý các món ăn tại một nhà hàng (chỉ dùng cho người quản lý nên không cần đăng nhập)

<a name = "feature"></a>

## II. Các tính năng của hệ thống
1. Xem các món ăn tại cửa hàng (chia theo combo, đồ ăn, thức uống, khai vị, tráng miệng)
![view](/app/src/assets/view.png)
2. Xem được thông tin của từng món ăn
![detail](/app/src/assets/detail.png)
3. Tạo được món ăn mới
![add](/app/src/assets/add.png)
4. Chỉnh sửa món ăn và Xóa món ăn
![edit-delete](/app/src/assets/edit-delete.png)
5. Tìm kiếm món ăn (click vào món ăn tìm kiếm hiển thị thông tin món ăn)
![search](/app/src/assets/search.png)
6. Filter món ăn (theo các tiêu chí như: thứ tự tên món ăn theo bảng chữ cái, giá món ăn tăng dần/giảm dần).
![filter](/app/src/assets/filter.png)

<a name = "classDiagram"></a>

## III. Class Diagram
![classDiagram](/app/src/assets/classDiagram.png)

<a name = "workLog"></a>

## IV. Phân chia công việc
- Nhóm phân chia công việc cho các thành viên theo các tính năng của sản phẩm, cụ thể:
    * Nguyễn Ngọc Phú - Hiện thực giao diện hệ thống.
    * Trần Nguyễn Phương Thành - Hiện thực chức năng thêm món ăn.
    * Phạm Võ Quang Minh - Hiện thực chức năng chỉnh sửa và xóa món ăn.
    * Nguyễn Xuân Thọ - Hiện thực chức năng filter món ăn.
    * Nguyễn Hồng Quân - Hiện thực chức năng tìm kiếm món ăn.

<a name = "structure"></a>

## V. Cấu trúc thư mục
```py
📦app                           # UI
 ┣ 📂assets                     # All assets such as jpg, svg, icon ... goes here
 ┣ 📂components                 # Reusable components across the web page
 ┣ 📂services                   # action to call api from server
 ┣ 📂utils                      # connect to URL server
 ┣ 📜App.js                     # App component
 ┗ 📜index.js                   # Program entry
 ┣
 📦server                       # API
```

<a name = "run"></a>

## VI. Hướng dẫn chạy dự án ở môi trường dev
### Prerequisites
- `node` v18.15.0
- `npm` 9.5.0
### Installation
1. Install dependencies
```sh
cd app
npm install
```
2. Start project:
```sh
npm start
```

<a name ="demo"></a>

## VII. Video demo

Đây là link video demo của nhóm
[Video Demo](https://www.youtube.com/watch?v=klgjsenr9FY)
