import { StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { Searchbar } from 'react-native-paper'

interface Props {
    readonly onSearch: (text: string) => void
}

export default function CustomSearcher({ onSearch }: Props) {
    const [searchQuery, setSearchQuery] = React.useState('');
    
    useEffect(() => {
        onSearch(searchQuery);
    }, [searchQuery, onSearch]);

    return (
        <Searchbar
            placeholder="Search"
            onChangeText={setSearchQuery}
            value={searchQuery}
            iconColor='#4951FF'
            style={{ backgroundColor: "#EEECFF", padding: 0, margin: 0 }}
            theme={{ colors: { primary: '#4951FF' } }}
        />
    )
}

const styles = StyleSheet.create({})