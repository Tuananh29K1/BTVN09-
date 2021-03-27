/**Viết hàm chuyển đổi nhiệt độ từ độ C sang độ F và ngược lại */
function chuyenNhietDo (nhietDo){
    let doF; 
    return doF = ` ${nhietDo*1.8 + 32} do F `;
}

function chuyenDoF (doF){
    let doC;
    return doC = `${(doF - 32)/1.8} do C`;
}

/**Viết hàm chuyển đổi tiền tệ: chuyển đổi từ USD, Euro sang VNĐ và ngược lại  */
function doiUSD (usd){
     let euro;
     euro = usd/1.18;
     let vnd;
     vnd = usd*23085;
     return `euro: ${euro} và vnd: ${vnd}`;
}
function doiEuro (euro){
    let usd;
    usd = euro*1.18;
    let vnd;
    vnd = euro*27297;
    return `usd: ${usd} và vnd: ${vnd}`;
}
function doiVnd (vnd){
    let usd;
    usd = vnd/23085;
    let euro;
    euro = vnd/27297;
    return `usd: ${usd} và euro: ${euro}`;
}

/**Viết function tính thế kỷ của 1 năm. Biết thế kỷ thứ nhất tính từ năm 1 đến 100. */
function tinhTheKy(nam){
    let theky;
    theky = Math.floor((nam + 99 )/100);
    return `năm ${nam} thuộc thế kỷ ${theky}` 
}
