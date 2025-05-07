<main className="app-container">
  <OfflineStatusBar />
  <SearchBar />
  <VoiceRecorder />
  <NoteList>
    <NoteCard 
      content={transcript} 
      tags={extractedTags}
      lastModified={timestamp}
    />
  </NoteList>
  <TagEditor />
</main>