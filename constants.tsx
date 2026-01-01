
import React from 'react';
import { CurriculumItem, Activity, GalleryItem } from './types';

export const COLORS = {
  pink: '#FFC0CB',
  yellow: '#FFF9C4',
  skyBlue: '#B3E5FC',
  mintGreen: '#C8E6C9',
  lavender: '#E1BEE7',
};

export const AVATAR_OPTIONS = {
  bases: [
    { id: 'kid1', label: '🧒', type: 'human' },
    { id: 'kid2', label: '👧', type: 'human' },
    { id: 'panda', label: '🐼', type: 'animal' },
    { id: 'bunny', label: '🐰', type: 'animal' },
  ],
  colors: ['#FF9AA2', '#FFB7B2', '#FFDAC1', '#E2F0CB', '#B5EAD7', '#C7CEEA', '#FFFFFF', '#000000'],
  accessories: [
    { id: 'none', label: '❌' },
    { id: 'cap', label: '🧢' },
    { id: 'bow', label: '🎀' },
    { id: 'glasses', label: '👓' },
    { id: 'crown', label: '👑' },
    { id: 'star', label: '⭐' },
  ]
};

export const CURRICULUM: CurriculumItem[] = [
  { id: '1', title: 'ABCs', icon: '🔤', color: 'bg-pink-200', description: 'Learning letters through song and play!' },
  { id: '2', title: 'Numbers', icon: '🔢', color: 'bg-yellow-100', description: 'Counting shiny stars and colorful blocks.' },
  { id: '3', title: 'Colors & Shapes', icon: '🎨', color: 'bg-blue-100', description: 'A world of bright rainbows and fun shapes.' },
  { id: '4', title: 'Rhymes & Music', icon: '🎶', color: 'bg-purple-100', description: 'Singing and dancing to happy melodies.' },
  { id: '5', title: 'Art & Craft', icon: '✂️', color: 'bg-green-100', description: 'Making masterpieces with glitter and glue.' },
];

export const ACTIVITIES: Activity[] = [
  { id: 'avatar', title: 'Avatar Maker', image: '/avatar_maker.png', category: 'Creative', link: '/avatar' },
  { id: '1', title: 'Magic Drawing', image: '/magic_drawing.png', category: 'Creative', link: '/magic-drawing' },
  { id: '2', title: 'Story Adventure', image: '/story_adventure.png', category: 'Reading', link: '/story-adventure' },
  { id: '3', title: 'Dance Party', image: '/dance_party.png', category: 'Physical', link: '/dance-party' },
];

export const GALLERY: GalleryItem[] = [
  { id: '1', url: '/playground_kids.png', alt: 'Fun in playground' },
  { id: '2', url: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=500&h=500', alt: 'Art class' },
  { id: '3', url: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=500&h=500', alt: 'Story time' },
  { id: '4', url: '/preschool_graduation.png', alt: 'Graduation day' },
];
