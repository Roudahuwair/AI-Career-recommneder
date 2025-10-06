document.getElementById("submitBtn").addEventListener("click", function() {
  const majors = { AI:0, Data:0, Eng:0, Biz:0, Mkt:0, Design:0, Psych:0, Health:0 };
  const answers = document.querySelectorAll("input[type='radio']:checked");

  if (answers.length < 2) {
    alert("Please answer all questions before submitting!");
    return;
  }

  answers.forEach(ans => {
    majors[ans.value] += 2;
  });

  const sorted = Object.entries(majors).sort((a, b) => b[1] - a[1]);
  const top3 = sorted.slice(0, 3);

  const list = document.getElementById("majorList");
  list.innerHTML = "";
  top3.forEach(m => {
    const li = document.createElement("li");
    li.textContent = `${m[0]} (${m[1]} pts)`;
    list.appendChild(li);
  });

  document.getElementById("result").classList.remove("hidden");
});
