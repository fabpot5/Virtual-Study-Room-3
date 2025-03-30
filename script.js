// script.js - Enhanced Version
// Pomodoro Timer with Progress Circle
let timer;
let isWorking = true;
let timeLeft = 1500;
let pomodorosCompleted = 0;
const progressCircle = document.querySelector('.progress');
const intervalButtons = document.querySelectorAll('.interval-btn');

// Timer functions
function updateProgress() {
    const circumference = 2 * Math.PI * 65;
    const offset = circumference - (timeLeft / 1500) * circumference;
    progressCircle.style.strokeDashoffset = offset;
}

function startTimer(duration) {
    // ... (existing timer logic with added progress updates)
}

// Enhanced Task Manager with Local Storage
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function addTask(text, priority) {
    // ... (task creation with priority classes and delete buttons)
}

// Notes System with Local Storage
let notes = JSON.parse(localStorage.getItem('notes')) || [];

function saveNotes() {
    localStorage.setItem('notes', JSON.stringify(notes));
}

// Music Player with Playlist
const audio = document.getElementById('audioPlayer');
const tracks = document.querySelectorAll('.track');

tracks.forEach(track => {
    track.addEventListener('click', () => {
        tracks.forEach(t => t.classList.remove('active'));
        track.classList.add('active');
        audio.src = track.dataset.src;
        audio.play();
    });
});

// Enhanced Dark Mode with Local Storage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) document.body.classList.add(savedTheme);

document.getElementById('themeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark-mode' : '');
});

// Statistics Tracking
function updateStats() {
    document.getElementById('pomodoros').textContent = pomodorosCompleted;
    document.getElementById('completedTasks').textContent = 
        tasks.filter(task => task.completed).length;
}

// Initialize app
function init() {
    tasks.forEach(task => addTask(task.text, task.priority));
    notes.forEach(note => createNoteElement(note));
    updateStats();
}

init();