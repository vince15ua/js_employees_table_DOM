parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var e,t,n=document.querySelector("table"),a=!0;n.addEventListener("click",function(r){switch(r.target.tagName){case"TH":if(t!==r.target||!0===a){do{e=0;for(var i=n.rows,l=2;l<i.length-1;l++){var c=i[l-1].getElementsByTagName("TD")[r.target.cellIndex].innerHTML.toLowerCase().split(",").join("").split("$").join(""),o=i[l].getElementsByTagName("TD")[r.target.cellIndex].innerHTML.toLowerCase().split(",").join("").split("$").join("");switch(r.target.innerHTML){case"Age":case"Salary":Number(c)>Number(o)&&(i[l].parentNode.insertBefore(i[l],i[l-1]),e++);break;default:1===c.localeCompare(o)&&(i[l].parentNode.insertBefore(i[l],i[l-1]),e++)}}}while(e>0);a=!1,t=r.target}else{do{e=0;for(var d=n.rows,s=2;s<d.length-1;s++){var m=d[s-1].getElementsByTagName("TD")[r.target.cellIndex].innerHTML.toLowerCase().split(",").join("").split("$").join(""),u=d[s].getElementsByTagName("TD")[r.target.cellIndex].innerHTML.toLowerCase().split(",").join("").split("$").join("");switch(r.target.innerHTML){case"Age":case"Salary":Number(m)<Number(u)&&(d[s].parentNode.insertBefore(d[s],d[s-1]),e++);break;default:-1===m.localeCompare(u)&&(d[s].parentNode.insertBefore(d[s],d[s-1]),e++)}}}while(e>0);a=!0}}}),n.addEventListener("click",function(e){for(var t=n.rows,a=0;a<t.length;a++)t[a].classList.remove("active");for(var r=1;r<t.length-1;r++)e.target.parentNode===t[r]&&t[r].classList.add("active")});var r=document.createElement("form");r.action="/",r.method="get",r.classList.add("new-employee-form"),document.body.appendChild(r);for(var i=["Name","Position","Age","Salary"],l=0;l<i.length;l++){var c=document.createElement("input"),o=document.createElement("label");c.setAttribute("data-qa",i[l]),c.id=i[l],c.name=i[l],c.type="text",o.htmlFor=i[l],o.innerHTML=i[l],o.appendChild(c),r.appendChild(o)}var d=document.getElementById("Age"),s=document.getElementById("Salary");d.type="number",s.type="number";var m=document.createElement("select"),u=document.createElement("label");m.id="mySelect",u.id="myLabel",u.htmlFor="mySelect",u.innerHTML="Office:";for(var p=["Tokyo","Singapore","London","New York","Edinburgh","San Francisco"],v=0;v<p.length;v++){var g=document.createElement("option");g.value=p[v],g.text=p[v],m.appendChild(g)}u.appendChild(m),r.children[1].after(u);var f=document.createElement("button");f.type="submit",f.name="Save to table",f.innerHTML="Save to table",r.append(f),r.addEventListener("submit",function(e){e.preventDefault();var t=new FormData(r),a=document.createElement("tr"),i=Object.fromEntries(t.entries());for(var l in i){var c=document.createElement("td");"Salary"!==l?(c.innerText=i[l],a.append(c)):(c.innerHTML="$".concat(i[l]),a.append(c))}var o=document.createElement("td");function d(e,t,n){var a=document.createElement("DIV");a.className="notification",a.classList.add(n),a.setAttribute("data-qa","notification"),a.innerHTML=" \n    <h2 class = 'title'>".concat(e,"</h2>\n    <p>").concat(t,"</p>\n  "),document.body.appendChild(a),setTimeout(function(){return a.remove()},3e3)}o.innerHTML=m.value,a.children[1].after(o),a.children[0].innerHTML.length<4||a.children[3].innerHTML<18||a.children[3].innerHTML>90?d("Error","Please enter correct values","error"):(n.append(a),d("Success","Employee is successfully added","success"))});var L=!0;n.addEventListener("dblclick",function(e){var t=n.rows;if(!0===L)for(var a=function(n){if(e.target.parentNode===t[n]){var a=document.createElement("input"),r=e.target,i=r.cellIndex,l=r.clientWidth;a.style.width="".concat(l,"px"),a.id=r.innerHTML,a.name=r.innerHTML,a.type=3===i||4===i?"number":"text",a.classList.add("cell-input"),t[n].replaceChild(a,r),L=!1,a.addEventListener("keyup",function(e){if("Enter"===e.code){switch(""===a.value&&(a.value=r.innerHTML),i){case 0:case 1:case 2:case 3:r.innerHTML=a.value;break;case 4:""!==a.value&&(r.innerHTML="$".concat(Number(a.value).toLocaleString("en")))}t[n].replaceChild(r,a),L=!0}})}},r=1;r<t.length-1;r++)a(r)});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.7e4847b2.js.map