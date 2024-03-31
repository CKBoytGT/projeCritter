const projectResolvers = {
  Query: {
    //formerly returnProject
    project: async (_, args, context) => {
      if (context) {
        const currentUser = await User.findOne({ _id: context._id }).select(
          "-__v -password"
        );
        const selectedProject = currentUser.projects.find(
          (project) => project._id.toString() == args.input
        );
        return selectedProject;
      } else {
        throw new Error("Not authorized.");
      }
    },
  },

  Mutation: {
    //TODO
  },
};

export default projectResolvers;
