import data from "./data";

function App() {
  return (
    <div>
      <header>
        <a href = "/"><h1>butter</h1></a>
        <p>bet on real events happening soon.</p>
      </header>
      <main>
        <div className = "bet_cards">
          {data.active_bets.map((bet) => (
              <div className = "bet_card">
                <div className = 'card_top_half'>
                  <p>{bet.time_left} hours left</p>
                  <h2>{bet.name}</h2>
                </div>
                <div className = 'card_bottom_half'>
                  <div className = 'price_text'>
                    <h3>${bet.price.toLocaleString('en', {useGrouping:true})}</h3>
                    <p>Pot size</p>
                  </div>
                  <div className = 'button_section'> 
                    <button name = "firstbet" type = "submit"><img src = {bet.choice_one_image} alt = {bet.choice_one}/>   {bet.percent_one}%</button>
                    <button name = "secondbet" type = "submit"><img src = {bet.choice_two_image} alt = {bet.choice_two}/>   {bet.percent_two}%</button>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </main>
    </div>
  );
}

export default App;
