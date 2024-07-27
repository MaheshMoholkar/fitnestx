import { View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function NextButton(
    { icon, handlePress }: { icon: any, handlePress: () => void }
) {
    return (
        <TouchableOpacity
            onPress={handlePress}
            className='absolute bottom-12 right-10 rounded-fullp-4'>
            <Image
                source={icon}
                style={{ width: 75, height: 75 }}
            />
        </TouchableOpacity>
    )
}