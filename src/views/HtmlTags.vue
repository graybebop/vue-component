<template>
  <div>
    <p>Pluto<del>is</del> <ins>isn’t</ins> a planet.</p>
  </div>
  <div>
    <p><abbr title="President of The United States">POTUS</abbr> rode his bicycle into a tree.</p>
  </div>
  <div>
    <meter min="0" max="100" low="59" high="90" optimum="90" value="50">50%</meter>
  </div>
  <div><progress id="project" max="100" value="70">70%</progress></div>
  <div>
    <details>
      <summary>Details</summary>

      Something small enough to escape casual notice.
    </details>

    <details open>
      <summary>Item 2</summary>

      Something else. This one defaults to open!
    </details>
  </div>
  <div>
    <figure>
      <blockquote cite="https://en.wikipedia.org/wiki/Citizenship_in_a_Republic">
        <p>It is not the critic who counts; not the man who points out how the strong man stumbles, or where the doer of deeds could have done them better...</p>
      </blockquote>

      <figcaption>--Teddy Roosevelt, <cite>Citizenship in a Republic Speach</cite></figcaption>
    </figure>
  </div>
  <div>
    <p>Posted: <time datetime="2020-07-07">July 7th</time></p>
  </div>
  <div>
    <label for="car-make">Choose a car make:</label>

    <input list="car-makes" id="car-make" name="car-makes" placeholder="Select make.." />

    <datalist id="car-makes">
      <option value="BMW"></option>

      <option value="Tesla"></option>

      <option value="Toyota"></option>

      <option value="Volkswaggon"></option>

      <option value="Mazda"></option>
    </datalist>
  </div>
  <div>
    <mark> It is not the critic who counts; not the man who points out how the strong man stumbles, or where the doer of deeds could have done them better… </mark>
  </div>
</template>
