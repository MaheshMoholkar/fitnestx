import { View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function NextButton(
    { imagePath, handlePress }: { imagePath: any, handlePress: () => void }
) {
    return (
        <TouchableOpacity
            onPress={handlePress}
            className='absolute bottom-12 right-10 rounded-fullp-4'>
            <Image
                source={imagePath}
                style={{ width: 75, height: 75 }}
            />
        </TouchableOpacity>
    )
}