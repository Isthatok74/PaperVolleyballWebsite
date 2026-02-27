import ContentTextSection from "./ContentTextSection"

function ContentAbout(): JSX.Element 
{
    return (
        <ContentTextSection>
          <h2>Who made this?</h2>
          <p>Paper Volleyball is a passion project developed solely by a simple man who delights greatly in two things: volleyball and coding.</p>
          
          <h2>What's the highlight of the game?</h2>
          <p>A sophisticated AI opponent that uses every move available to the player, executing them with precision and mastery, so everything the AI can do, the player can also learn to do.</p>
          <p>Gameplay is built around direct, skill-based controls, where timing, positioning, and decision-making truly matter.</p> 
          <p>Presented with simple but high-quality stick figure animations, the game delivers a light, fun aesthetic while offering a deep and rewarding challenge for players who seek to master it.</p>

          <h2>How was it done?</h2>
          <p>The game is built on Unity in C#. </p>
          <p>The AI uses particle swarm intelligence to heuristically choose its course of action in any given situation via nonlinear optimization techniques, with consideration for thread concurrency.</p>
          <p>All visual aspects were designed and drawn by myself. </p>
          <p>In total it will have taken 1,000+ hours to finish the game, including the process of incorporating to sell and market the game.</p>

          <h2>So what's left?</h2>
          <p>I have big plans for what I still want to implement in the game. I'm looking to get some useful feedback from playtesters on the Alpha build. Plese note that the available features in the final version may differ from what is currently presented.</p>
          <p>I also haven't truly started marketing the game yet. Look out for a Steam wishlist soon.</p>

          <h2>Business Inquiries</h2>
          <p><a href="mailto:papervolleyball@gmail.com">papervolleyballdev@gmail.com</a></p>
        </ContentTextSection>
    );
}
export default ContentAbout;