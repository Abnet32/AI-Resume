import React, { useState } from 'react'

const SkillsForm = ({ data, onChange }) => {
    const [newSkill, setNewSkill] = useState("");
    const addSkill = () => {
        if (SkillsForm.trim() && !data.includes(newSkill.trim()))
            setNewSkill("")
    }
     const removeSkill = (indexToRemove) => {
       onChange(data.filter((_, index)=> index !== indexToRemove))
    };
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            addSkill();
        }
    }
  return (
    <div className="space-y-4">
      <div>
        <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900">
          Skills
        </h3>
        <p className="text-sm text-gray-900">
          Add your technical and soft skills
        </p>
          </div>
          <div className='flex gap-2'>
              <input type="text" placeholder='Enter a skill (e.g., React, Node, Team Player)' className='flex-1 px-3 py-2 text-sm' onChange={(e)=> setNewSkill(e.target.value)} value={newSkill}/>
          </div>
    </div>
  );
}

export default SkillsForm
