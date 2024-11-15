// Nhập điểm các môn học
let vatLy = parseFloat(prompt("Nhập điểm Vật lý:"));
let hoaHoc = parseFloat(prompt("Nhập điểm Hóa học:"));
let sinhHoc = parseFloat(prompt("Nhập điểm Sinh học:"));

// Tính tổng điểm
let tongDiem = vatLy + hoaHoc + sinhHoc;

// Tính điểm trung bình
let diemTrungBinh = tongDiem / 3;

// Hiển thị kết quả
console.log("Tổng điểm: " + tongDiem);
console.log("Điểm trung bình: " + diemTrungBinh.toFixed(2));
alert("Tổng điểm: " + tongDiem + "\nĐiểm trung bình: " + diemTrungBinh.toFixed(2));