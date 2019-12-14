import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  FlatList
} from 'react-native';
import SingleGoal from './components/SingleGoal';
import GoalInput from './components/GoalInput'

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = newValue => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: newValue }
    ]);
  };

  const removeChoseGoal = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId)
    })
  }

  return (
    <View style={styles.screen}>
      <GoalInput
        addNewGoal={addGoalHandler}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => <SingleGoal id={itemData.item.id} onDelete={removeChoseGoal} title={itemData.item.value} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
});
