[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=21892362&assignment_repo_type=AssignmentRepo)
write the html and css code seperatell according to the give inage write the code seperately

<!-- FILE: index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>CSS MCQ Quiz for Students</title>
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  <header class="site-header">
    <div class="header-inner">
      <h1>CSS MCQ Quiz for Students</h1>
      <p class="subtitle">Learn Inline, Internal, External CSS + Box Model + Positions</p>
    </div>
  </header>

  <main class="container">
    <section class="quiz">
      <h2 class="section-title">Multiple Choice Questions</h2>

      <article class="card">
        <ol start="1">
          <li class="question">
            <div class="q-text">Which CSS type is written inside the HTML tag?</div>
            <div class="options">
              <label><input type="radio" name="q1"> Internal CSS</label>
              <label><input type="radio" name="q1"> External CSS</label>
              <label><input type="radio" name="q1"> Inline CSS</label>
              <label><input type="radio" name="q1"> None</label>
            </div>
          </li>
        </ol>
      </article>

      <article class="card">
        <ol start="2">
          <li class="question">
            <div class="q-text">Which tag is used to write Internal CSS?</div>
            <div class="options">
              <label><input type="radio" name="q2"> &lt;head&gt;</label>
              <label><input type="radio" name="q2"> &lt;style&gt;</label>
              <label><input type="radio" name="q2"> &lt;script&gt;</label>
              <label><input type="radio" name="q2"> &lt;css&gt;</label>
            </div>
          </li>
        </ol>
      </article>

      <article class="card">
        <ol start="3">
          <li class="question">
            <div class="q-text">External CSS is added using:</div>
            <div class="options">
              <label><input type="radio" name="q3"> &lt;script&gt;</label>
              <label><input type="radio" name="q3"> &lt;link&gt;</label>
              <label><input type="radio" name="q3"> &lt;meta&gt;</label>
              <label><input type="radio" name="q3"> &lt;import&gt;</label>
            </div>
          </li>
        </ol>
      </article>

      <section class="example">
        <h3>CSS Box Model Example</h3>
        <p class="muted">(Example content follows the questions — styled small like the reference)</p>
      </section>
    </section>

  </main>

<button class="pos-btn">Position: Fixed</button>

</body>
</html>

/_ FILE: styles.css _/
/_ Basic reset _/
\*{box-sizing:border-box;margin:0;padding:0}
body{font-family: 'Segoe UI', Roboto, Arial, sans-serif;background:#f4f6f8;color:#222;line-height:1.45}

/_ Header _/
.site-header{background:linear-gradient(90deg,#2c57d6,#3b86ff);color:#fff;padding:22px 0;border-bottom:6px solid rgba(255,255,255,0.12)}
.header-inner{max-width:1000px;margin:0 auto;text-align:center;padding:0 20px}
.header-inner h1{font-size:28px;letter-spacing:1px;margin-bottom:6px}
.header-inner .subtitle{font-size:13px;opacity:0.95}

/_ Main container _/
.container{max-width:1000px;margin:26px auto;padding:0 20px}
.section-title{font-size:18px;margin-bottom:12px;color:#333}

/_ Card / question styling _/
.card{background:#fff;border:1px solid #e0e4ea;border-radius:6px;padding:18px;margin-bottom:18px;box-shadow:0 1px 0 rgba(0,0,0,0.03)}
.question .q-text{font-weight:600;margin-bottom:12px;color:#333}
.options{display:flex;flex-direction:column;gap:8px}
.options label{display:inline-flex;align-items:center;gap:8px;font-size:14px;color:#444}
.options input{width:16px;height:16px}

/_ Example section _/
.example{margin-top:10px;padding:12px;background:linear-gradient(180deg,#fff,#fbfdff);border-radius:6px;border:1px solid #eef3ff}
.example h3{font-size:16px;margin-bottom:6px}
.muted{color:#666;font-size:13px}

/_ Fixed position button similar to the small blue button on the lower-right of the reference _/
.pos-btn{position:fixed;right:22px;bottom:22px;background:#2b6ef6;color:#fff;border:none;padding:10p
