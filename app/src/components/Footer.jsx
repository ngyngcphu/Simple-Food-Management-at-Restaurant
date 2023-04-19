export default function Footer() {
    return (
        <footer className="footer mt-5 bg-white" id="footer">
            <div className="grid wide footer-content mt-3">
                <div className="row d-flex justify-content-evenly">
                    <div className="col-sm-5">
                        <h5 className="footer-heading">Simple Food Management Application at Restaurant</h5>
                        <ul className="footer_list" style={{ listStyle: 'none', paddingLeft: 0 }}>
                            <li className="footer_item">
                                <p>Phần mềm quản lý các món ăn tại một nhà hàng, hỗ trợ người quản lý với các thao tác như:</p>
                            </li>
                            <li className="footer_item">
                                <ol>
                                    <li>Xem các món ăn tại cửa hàng (chia theo combo, đồ ăn, thức uống, khai vị, tráng miệng)</li>
                                    <li>Tạo được món ăn mới </li>
                                    <li>Chỉnh sửa món ăn</li>
                                    <li>Xóa món ăn</li>
                                    <li>Tìm kiếm món ăn.</li>
                                    <li>Filter món ăn.</li>
                                </ol>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-3">
                        <h5 className="footer-heading">Thành viên thực hiện</h5>
                        <ol className="footer_list" style={{ listStyle: 'none', paddingLeft: 0 }}>
                            <li className="footer_item">
                                <a className="text-muted" href='https://github.com/ngyngcphu'>Nguyễn Ngọc Phú</a>
                            </li>
                            <li className="footer_item">
                                <a className="text-muted" href='https://github.com/Tanio253'>Trần Nguyễn Phương Thành</a>
                            </li>
                            <li className="footer_item">
                                <a className="text-muted" href='https://github.com/quannhg'>Nguyễn Hồng Quân</a>
                            </li>
                            <li className="footer_item">
                                <a className="text-muted" href='https://github.com/tho-nguyenxuan'>Nguyễn Xuân Thọ</a>
                            </li>
                            <li className="footer_item">
                                <a className="text-muted" href='https://github.com/quangminh031126'>Phạm Võ Quang Minh</a>
                            </li>
                        </ol>
                    </div>
                    <div className="col-sm-3">
                        <h5 className="footer-heading">Link source code và báo cáo</h5>
                        <ul className="footer_list" style={{ listStyle: 'none', paddingLeft: 0 }}>
                            <li className="footer_item">
                                <div className="footer-item-link" style={{ textDecoration: 'none' }}>
                                    <svg aria-hidden="true" className="octicon octicon-mark-github me-2" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                                    </svg>
                                    <a className="text-muted" href='https://github.com/ngyngcphu/Simple-Food-Management-at-Restaurant'>https://github.com/ngyngcphu/Simple-Food-Management-at-Restaurant</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="grid wide">
                    <p style={{ textAlign: 'center' }}></p>
                </div>
            </div>
        </footer>
    )
}