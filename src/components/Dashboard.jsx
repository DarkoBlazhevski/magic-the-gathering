import React from 'react';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      cards: []
    };
  }

  componentDidMount() {
    fetch("https://api.magicthegathering.io/v1/cards?random=true&pageSize=100&language=English")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            cards: result.cards
          });
        },

        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {

    const { parameter1 } = this.props.match.params;

    const { error, isLoaded, cards } = this.state;
    if (error) {
      return <div>

        <h1>Hello {parameter1}</h1>
        <h1>Error: {error.message}</h1>
      </div>
    } else if (!isLoaded) {
      return <div>
        <h1>Hello {parameter1}=</h1>
        <h1>Loading...</h1>
      </div>
    } else {
      return (
        <div className='card-container'>
          <h1>Hello {parameter1}=</h1>
          <ul>
            {cards.map(card => (
              <li key={card.id}>
                {card.name}
                {card.types.map(t => (
                  <li>{t}</li>
                ))}
                {card.colors.map(c => (
                  <li>Color: {c}</li>
                ))}

              </li>
            ))}
              cards.
          </ul>
        </div>
      );
    }
  }
}

export default Dashboard;