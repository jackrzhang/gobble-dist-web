import React, { Component, PropTypes } from 'react';
import NutrientEntry from './NutrientEntry';
import RecommendationEntry from './RecommendationEntry';

class AnalysisEntry extends Component {
  componentWillMount() {
    const { data, getRandomRecommendations, category } = this.props;
    Object.keys(data).forEach((nutrients) => {
      return Object.keys(data[nutrients]).forEach((nutrient) => {
        const recommendations = data[nutrients][nutrient].recommendedProducts;
        if (recommendations) {
          const chosenRecommendation = recommendations[Math.floor(Math.random() * recommendations.length)];
          chosenRecommendation.quality = nutrients;
          chosenRecommendation.nutrient = [nutrient];
          chosenRecommendation.category = category;
          getRandomRecommendations(chosenRecommendation);
        }
      });
    });
  }

  render() {
    const { category, data, showProductDetails, selectedProduct, recommendationsStorage } = this.props;
    return (
      <div>
        {!data.BadNutrients ? null :
        Object.keys(data.BadNutrients).map((nutrient) =>
          <NutrientEntry
            key={nutrient}
            category={category}
            nutrient={nutrient}
            data={data.BadNutrients[nutrient]}
            quality="bad"
          />)}
        {!data.GoodNutrients ? null :
        Object.keys(data.GoodNutrients).map((nutrient) =>
          <NutrientEntry
            key={nutrient}
            category={category}
            nutrient={nutrient}
            data={data.GoodNutrients[nutrient]}
            quality="good"
          />)}
        {!data.nutrientsWithoutRecommendation ? null :
        Object.keys(data.nutrientsWithoutRecommendation).map((nutrient) =>
          <NutrientEntry
            key={nutrient}
            category={category}
            nutrient={nutrient}
            data={data.nutrientsWithoutRecommendation[nutrient]}
            quality="neutral"
          />)}
        {Object.keys(recommendationsStorage).length === 0 ? null :
        Object.keys(recommendationsStorage).map((product) =>
          <RecommendationEntry
            key={product}
            product={recommendationsStorage[product]}
            showProductDetails={showProductDetails}
            selectedProduct={selectedProduct}
          />
        )}
      </div>
    );
  }
}

AnalysisEntry.propTypes = {
  category: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  showProductDetails: PropTypes.func.isRequired,
  selectedProduct: PropTypes.number.isRequired,
  getRandomRecommendations: PropTypes.func.isRequired,
  recommendationsStorage: PropTypes.object.isRequired
};

export default AnalysisEntry;
