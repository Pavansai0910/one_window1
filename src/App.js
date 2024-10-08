// App.js
import React from 'react';
import CountryCard from './CountryCard';
import './App.css'; // Import the global styles for background

const countries = [
  {
    name: "Ireland",
    academic_reputation: {
      university_rankings: {
        QS_World_Ranking: "2 universities in the top 200",
        Times_Higher_Education: "3 universities in the top 300"
      },
      accreditation: "Internationally recognized qualifications"
    },
    cost_of_education: {
      tuition_fees: "€10,000 - €25,000 per year"
    },
    living_expenses: {
      cost_of_living: "€9,000 - €12,000 per year"
    }
  },
  {
    name: "UK",
    academic_reputation: {
      university_rankings: {
        QS_World_Ranking: "4 of the top 10",
        Times_Higher_Education: "3 of the top 10"
      },
      accreditation: "Global recognition and high standards"
    },
    cost_of_education: {
      tuition_fees: "£10,000 - £30,000 per year"
    },
    living_expenses: {
      cost_of_living: "£9,000 - £12,000 per year"
    }
  }
];

function App() {
  return (
    <div className="App">
      <h1>Countries Information</h1>
      <div className="cards-container">
        {countries.map((country, index) => (
          <CountryCard key={index} country={country} />
        ))}
      </div>
    </div>
  );
}

export default App;
