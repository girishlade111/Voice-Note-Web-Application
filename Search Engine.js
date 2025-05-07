const searchNotes = (query) => {
  return notes.filter(note => 
    note.content.toLowerCase().includes(query) ||
    note.tags.some(tag => tag.includes(query))
};