import React from "react";

function ContentAbout()
{
    return (
        <div class="text-left-align">
          <h1>About</h1>
          <br/>

          <h3>Who made this?</h3>
          <p>Paper Volleyball is a passion project developed solely by a simple man who delights greatly in two things: volleyball and coding.</p>
          <br/>
          
          <h3>How was it done?</h3>
          <p>I'm using Unity in C# to build the client side for this game, and the multiplayer server is being developed in Go. </p>
          <p>All player sprites and CPU logic were designed and written by myself. In total it will have take 1,000+ hours to finish the game, including the process of incorporating to sell and market the game.</p>
          <br/>

          <h3>So what's left?</h3>
          <p>I have big plans for what I still want to implement in the game. As of 2024, I still need to flesh out the campaign mode to be more "rogue-like", and the multiplayer aspect is still in the feasibility / research stage of development.</p>
          <p>I also haven't truly started marketing the game yet. Look out for a Steam wishlist soon.</p>
          <br/>

          <h3>Business Inquiries</h3>
          <p><a href="mailto:papervolleyball@gmail.com" class="filter-white">papervolleyballdev@gmail.com</a></p>
          <br/>
        </div>
    );
}
export default ContentAbout;