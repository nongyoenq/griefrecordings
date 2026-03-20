function loadNavbar() {
    // ลบเครื่องหมาย / ด้านหน้าออก เพื่อให้หาไฟล์ในโฟลเดอร์เดียวกันก่อน
    fetch('nav.html') 
        .then(response => {
            if (!response.ok) throw new Error("หาไฟล์ nav.html ไม่เจอ");
            return response.text();
        })
        .then(data => {
            document.getElementById('nav-placeholder').innerHTML = data;
        })
        .catch(error => console.error('เกิดข้อผิดพลาด:', error));
}

loadNavbar();