const logo = document.getElementById("logo");

document.body.style.margin = "0px";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.width = "100%";
document.body.style.height = "100%";

logo.style.width = "1000px";
logo.style.height = "1000px";

const stageSize = {
	width: logo.clientWidth * 4,
	height: logo.clientHeight * 4,
};

console.log(stageSize);

logo.width = stageSize.width;
logo.height = stageSize.height;

const pen = logo.getContext("2d");

pen.fillStyle = "black";
pen.strokeStyle = "white";
pen.lineWidth = (stageSize.width + stageSize.height) / 300;

pen.beginPath();
pen.rect(0, 0, stageSize.width, stageSize.height);
pen.fill();
pen.closePath();

pen.beginPath();
pen.arc(
	stageSize.width / 2,
	stageSize.height / 2,
	(stageSize.width + stageSize.height) / 6,
	0,
	2 * Math.PI,
);
pen.stroke();
pen.closePath();

logo.addEventListener("click", () => {
	window.location.href = logo
		.toDataURL("image/png")
		.replace("image/png", "image/octet-stream");
});
