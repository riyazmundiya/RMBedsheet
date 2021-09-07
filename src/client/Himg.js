import React from 'react'

export const Himg = () => {
    return (
        <>
		<center>
		<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
		
      <img src="/image/1.jpeg" class="img-fluid" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="/image/2.jpg" class="img-fluid" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="/image/3.jpg" class="img-fluid" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="/image/4.jpg" class="img-fluid" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="/image/5.jpg" class="img-fluid" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="/image/6.jpg" class="img-fluid" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="/image/7.jpg" class="img-fluid" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</center>
</>
    )
}
