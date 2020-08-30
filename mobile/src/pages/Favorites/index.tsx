import React from 'react';
import { View, ScrollView } from 'react-native';
import PageHeader from '../../components/PageHeader';

import styles from './styles';
import TeacherItem from '../../components/TeacherItem';

function Favorites() {
    return (
        <View style={styles.container}>

            <ScrollView style={styles.teacherList}>
                <PageHeader title="Meus proffys favoritos" />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </ScrollView>
        </View>
    )
}

export default Favorites;