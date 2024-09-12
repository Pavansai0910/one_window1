// CountryCard.js
import React from 'react';
import './CountryCard.css'; // Ensure styles are linked

// Map country names to flag emojis
const flagMapping = {
  USA: '🇺🇸',
  Canada: '🇨🇦',
  Germany: '🇩🇪',
  Ireland: '🇮🇪',
  UK: '🇬🇧',
  // Add more countries as needed
};

function CountryCard({ country }) {
  const flag = flagMapping[country.name] || '🏳️'; // Default to a white flag if not found

  return (
    <div className="country-card">
        <div class="bg">
      <h2 id="country">{flag} {country.name}</h2>
      <div className="info-container">
        {/* Academic Reputation on the left */}
        <div className="academic-section">
          <p><strong>Academic Reputation:</strong></p>
          <ul>
            <li>QS World Ranking: {country.academic_reputation.university_rankings.QS_World_Ranking}</li>
            <li>Times Higher Education: {country.academic_reputation.university_rankings.Times_Higher_Education}</li>
            <li>Accreditation: {country.academic_reputation.accreditation}</li>
          </ul>
        </div>

        {/* Cost of Education on the right */}
        <div className="cost-section">
          <p><strong>Cost of Education:</strong></p>
          <p>{country.cost_of_education.tuition_fees}</p>
          <p><strong>Living Expenses:</strong></p>
          <p>{country.living_expenses.cost_of_living}</p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default CountryCard;
