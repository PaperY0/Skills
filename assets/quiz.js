/* ═══════════════ PLS Quiz Engine ═══════════════ */
function checkQuiz(id){
  const container=document.querySelector(`[data-quiz-id="${id}"]`);
  if(!container)return;
  const questions=container.querySelectorAll('.quiz-question');
  let score=0,total=questions.length;
  let allAnswered=true;

  questions.forEach((q,i)=>{
    const correct=q.dataset.correct;
    const selected=q.querySelector('input:checked');
    const fb=q.querySelector('.quiz-feedback');
    if(!fb)return;

    if(!selected){allAnswered=false;return}

    fb.classList.add('show');
    if(selected.value===correct){
      score++;
      q.classList.add('correct');
      fb.classList.add('correct-fb');
      fb.innerHTML='✅ 正确！'+q.dataset.explanation;
    }else{
      q.classList.add('incorrect');
      fb.classList.add('incorrect-fb');
      fb.innerHTML='❌ 不对。'+q.dataset.explanation;
    }
  });

  if(!allAnswered){alert('请先回答所有题目');return}

  const scoreEl=container.querySelector('.quiz-score');
  if(!scoreEl)return;

  const pct=score/total;
  let cls,msg;
  if(pct===1){cls='perfect';msg='🎉 完美！你已经完全理解这节课的核心概念。'}
  else if(pct>=0.5){cls='good';msg=`👍 还不错！答对了 ${score}/${total} 题。建议回顾一下做错的题目对应的课程章节。`}
  else{cls='retry';msg=`📖 答对了 ${score}/${total} 题。建议重新看一遍这节课，特别是 ⑧ 和 ⑨ 节。`}

  scoreEl.className='quiz-score '+cls;
  scoreEl.textContent=`得分：${score}/${total} — ${msg}`;

  // Disable further changes
  container.querySelectorAll('input[type="radio"]').forEach(r=>r.disabled=true);
  container.querySelector('.quiz-btn').disabled=true;
}
