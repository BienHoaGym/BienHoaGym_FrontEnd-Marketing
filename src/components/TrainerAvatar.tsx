'use client'
import React, { useState, useEffect } from 'react'
import { publicApiService } from '@/../services/publicApi'

interface TrainerAvatarProps {
    photo?: string;
    index?: number;
    className?: string;
}

const FALLBACK_IMAGES = [
    '/images/huan-luyen-vien-the-hinh.jpg',
    '/images/doi_ngu.jpg',
    '/images/anh-gai-xinh-ngau-tap-gym-32.jpg',
    '/images/BIOMECHANICS.jpg',
    '/images/PT 1_1.jpg'
]

export default function TrainerAvatar({ photo, index = 0, className = "" }: TrainerAvatarProps) {
    const fullPhotoUrl = publicApiService.getFullImageUrl(photo)
    const defaultPlaceholder = FALLBACK_IMAGES[index % FALLBACK_IMAGES.length]
    
    const [imgSrc, setImgSrc] = useState<string>(defaultPlaceholder)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        if (fullPhotoUrl) {
            setImgSrc(fullPhotoUrl)
        } else {
            setImgSrc(defaultPlaceholder)
        }
    }, [fullPhotoUrl, defaultPlaceholder])

    return (
        <div className={`relative w-full h-full flex items-center justify-center overflow-hidden bg-neutral-900 ${className}`}>
            {/* Loading Placeholder */}
            {!isLoaded && (
                <div className="absolute inset-0 bg-neutral-800 animate-pulse flex items-center justify-center z-10">
                    <span className="text-white/10 text-4xl font-black">GYM</span>
                </div>
            )}
            
            <img 
                src={imgSrc} 
                alt="Trainer" 
                className={`w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => setIsLoaded(true)}
                onError={() => {
                    // Nếu ảnh từ backend lỗi, chuyển ngay sang ảnh fallback
                    if (imgSrc !== defaultPlaceholder) {
                        setImgSrc(defaultPlaceholder)
                    }
                }}
            />
            {/* Soft Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
        </div>
    )
}
