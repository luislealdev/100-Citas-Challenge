import React from 'react'

export const DatesList = ({ideas}) => {
  return (
    <>
                  <ol>
            {ideas.map((idea) => (
              <li key={idea}>{idea}</li>
            ))}
          </ol>
    </>
  )
}
