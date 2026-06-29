/* ═══════════════ PRE Quiz Engine ═══════════════ */

/**
 * Required HTML structure:
 *
 * <div class="quiz-container" data-quiz-id="L01">
 *   <h3>Quiz Title</h3>
 *   <div class="quiz-question" data-correct="b" data-explanation="因为...">
 *     <p>1. Question text?</p>
 *     <label><input type="radio" name="q1" value="a"> A. option</label>
 *     <label><input type="radio" name="q1" value="b"> B. option</label>
 *     <div class="quiz-feedback"></div>
 *   </div>
 *   ...more questions...
 *   <button class="quiz-btn" onclick="checkQuiz('L01')">提交答案</button>
 *   <div class="quiz-score"></div>
 * </div>
 */

function checkQuiz(id){
  const container=document.querySelector(`[data-quiz-id="${id}"]`);
  if(!container){
    console.error(`[quiz] container with data-quiz-id="${id}" not found`);
    return;
  }
  const questions=container.querySelectorAll('.quiz-question');
  let score=0,total=questions.length;
  let allAnswered=true;

  questions.forEach((q)=>{
    const correct=q.dataset.correct;
    const explanation=q.dataset.explanation||'暂无解析';
    const selected=q.querySelector('input:checked');
    const fb=q.querySelector('.quiz-feedback');
    if(!fb)return;

    if(!selected){allAnswered=false;return}

    fb.classList.add('show');
    q.classList.remove('correct','incorrect');
    fb.classList.remove('correct-fb','incorrect-fb');

    if(selected.value===correct){
      score++;
      q.classList.add('correct');
      fb.classList.add('correct-fb');
      fb.innerHTML='✅ 正确！'+explanation;
    }else{
      q.classList.add('incorrect');
      fb.classList.add('incorrect-fb');
      fb.innerHTML='❌ 不对。'+explanation;
    }
  });

  if(!allAnswered){
    alert('请先回答所有题目');
    return;
  }

  const scoreEl=container.querySelector('.quiz-score');
  if(!scoreEl)return;

  const pct=score/total;
  let cls,msg;
  if(pct===1){
    cls='perfect';
    msg='🎉 完美！你已经完全理解这节课的核心概念。';
  }else if(pct>=0.5){
    cls='good';
    msg=`👍 还不错！答对了 ${score}/${total} 题。建议回顾一下做错的题目对应的课程章节。`;
  }else{
    cls='retry';
    msg=`📖 答对了 ${score}/${total} 题。建议重新看一遍这节课。`;
  }

  scoreEl.className='quiz-score '+cls;
  scoreEl.textContent=`得分：${score}/${total} — ${msg}`;

  // Disable further changes
  container.querySelectorAll('input[type="radio"]').forEach(r=>r.disabled=true);
  const btn=container.querySelector('.quiz-btn')||container.querySelector('.quiz-submit');
  if(btn)btn.disabled=true;
}

/**
 * Auto-initialize a single quiz by binding the submit button.
 * Call this if quizzes are dynamically injected after page load.
 */
function initQuiz(id){
  const container=document.querySelector(`[data-quiz-id="${id}"]`);
  if(!container)return;
  const btn=container.querySelector('.quiz-btn')||container.querySelector('.quiz-submit');
  if(btn){
    btn.onclick=function(){checkQuiz(id);};
  }
}

// Auto-bind all quiz buttons on DOM ready
document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('.quiz-container').forEach(q=>{
    const id=q.dataset.quizId;
    if(id)initQuiz(id);
  });
});

/**
 * Toggle visibility of a reveal-answer block.
 * Used in STEP 7 Output sections to hide answers by default.
 *
 * HTML structure:
 * <div class="reveal-answer">
 *   <button class="reveal-btn" onclick="revealAnswer(this)">💡 点击查看答案</button>
 *   <div class="reveal-content"><!-- answer goes here --></div>
 * </div>
 */
function revealAnswer(btn){
  const container=btn.closest('.reveal-answer');
  const content=container.querySelector('.reveal-content');
  const isOpen=content.classList.contains('open');
  if(isOpen){
    content.classList.remove('open');
    btn.textContent='💡 点击查看答案';
  }else{
    content.classList.add('open');
    btn.textContent='🔒 收起答案';
  }
}
