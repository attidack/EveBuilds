const { User, Build } = require('./models')

const resolvers = {
  Query: {
    user: async (_, { id }) => {
      return User.findById(id).populate('builds')
    },
    build: async (_, { id }) => {
      return Build.findById(id).populate('owner')
    },
    builds: async () => {
      return Build.find().populate('owner')
    },
  },
  User: {
    builds: async (user) => {
      return Build.find({ owner: user.id })
    },
  },
  Build: {
    owner: async (build) => {
      return User.findById(build.owner)
    },
  },
}

module.exports = resolvers
