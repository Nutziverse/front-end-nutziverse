export function setCookie(cname, cvalue) {
  const d = new Date();
  d.setTime(d.getTime() + 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

export function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  let user = getCookie("token");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
    user = prompt("Please enter your name:", "");
    if (user != "" && user != null) {
      setCookie("token", user, 365);
    }
  }
}



export const addMakanan = (MID) => {
  const items = localStorage.getItem("pilih_makanan") || []
  
  const data = {
    makananID: MID,
    porsi: 1
  }
  
  if(items.length > 0) {
    let newData = JSON.parse(items)
    const index = newData.findIndex(el => el.makananID === MID)
    if(index > -1) {
      newData[index].porsi += 1
    } else {
      newData.push(data)
    }
    localStorage.setItem("pilih_makanan", JSON.stringify(newData))
  } else {
    localStorage.setItem("pilih_makanan", JSON.stringify([data]))
  }
}